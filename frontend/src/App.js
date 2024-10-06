import './App.css';  // Keep this for your main styles
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      <section className="sdg-bubbles">
        {/* Food Insecurity Bubble */}
        <div className="bubble bubble-left">
          <p><strong>Food Insecurity:</strong> Millions of people around the world struggle with access to nutritious food. Our platform aims to promote sustainable food practices and help reduce food insecurity by connecting users with simple, healthy recipes and meal plans.</p>
        </div>
        
        {/* What We Do Bubble */}
        <div className="bubble bubble-right">
          <p><strong>What We Do:</strong> Easy Eats provides easy-to-follow ketogenic meal plans and recipes to help individuals maintain a low-carb lifestyle while promoting health and sustainability. Our goal is to simplify meal preparation with a focus on reducing food waste and increasing access to nutritious options.</p>
        </div>

        {/* Contact Us Bubble */}
        <div className="bubble bubble-left">
          <p><strong>Contact Us:</strong> Have questions or feedback? Reach out to us at <a href="mailto:support@easyeats.com">support@easyeats.com</a> or follow us on social media. We’d love to hear from you!</p>
        </div>
      </section>
    </div>
  );
}

export default App;
