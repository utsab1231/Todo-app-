

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mt-4">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-4 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus
          malesuada nisi, quis consectetur tortor malesuada eget. Sed feugiat
          erat a est pellentesque, ac imperdiet justo tempus.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
        <h3 className="text-2xl font-semibold mb-4">Name</h3>
        <p className="text-xl">
          <strong>Physical Address:</strong> 123 Street, City, Country
        </p>
        <p className="text-xl">
          <strong>Email:</strong> email@example.com
        </p>
        <p className="text-xl">
          <strong>Phone:</strong> +1234567890
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 mr-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-4">
          <p className="text-xl">
            <strong>Social Handles:</strong>
          </p>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 mr-4"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
