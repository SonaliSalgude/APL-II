const express = require('express');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files like CSS
app.use(express.static('public'));

// Routes for each section
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to Virtual Labs', content: 'Select an option from the menu to get started.' });
});

app.get('/aim', (req, res) => {
    res.render('index', { title: 'Aim', content: '<h3>Aim of the Virtual Lab:</h3><p>The aim of this virtual lab is to provide students with a hands-on experience...</p>' });
});

app.get('/theory', (req, res) => {
    res.render('index', { title: 'Theory', content: '<h3>Theory Behind the Experiment:</h3><p>This section covers the theoretical background relevant to the experiment...</p>' });
});

app.get('/pretest', (req, res) => {
    res.render('index', { title: 'Pretest', content: '<h3>Pretest</h3><p>Before starting the virtual lab, please complete the pretest...</p>' });
});

app.get('/procedure', (req, res) => {
    res.render('index', { title: 'Procedure', content: '<h3>Steps of the Procedure:</h3><p>1. Step one of the procedure...</p>' });
});

app.get('/simulation', (req, res) => {
    res.render('index', { title: 'Simulation', content: '<h3>Simulation Section:</h3><p>Engage with the simulation...</p>' });
});

app.get('/posttest', (req, res) => {
    res.render('index', { title: 'Posttest', content: '<h3>Posttest</h3><p>Complete the posttest to evaluate your understanding...</p>' });
});

app.get('/references', (req, res) => {
    res.render('index', { title: 'References', content: '<h3>References</h3><p>List of references...</p>' });
});

app.get('/feedback', (req, res) => {
    res.render('index', { title: 'Feedback', content: `
        <div class="feedback-form">
            <h3>Your Feedback is Important to Us!</h3>
            <form action="thankyou.html" method="POST">
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>

                <label for="rating">Rate your experience (1 to 5):</label>
                <select id="rating" name="rating" required>
                    <option value="" disabled selected>Select a rating</option>
                    <option value="1">1 - Very Poor</option>
                    <option value="2">2 - Poor</option>
                    <option value="3">3 - Average</option>
                    <option value="4">4 - Good</option>
                    <option value="5">5 - Excellent</option>
                </select>

                <label for="feedback">Your Feedback:</label>
                <textarea id="feedback" name="feedback" rows="5" placeholder="Share your thoughts about the virtual lab experience" required></textarea>

                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    ` });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
