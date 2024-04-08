import tony from "../images/tony-stark.jpg";


export default function About() {
  return (
    <>
      <div>
        <h2>About Us</h2>
        <p>{`Stark Industries - where innovation meets excellence.`}</p>
        <img src={tony} alt="Tony Stark" />
      </div>
      <p>{`At Stark Industries, we're not just a company — we're a legacy. Founded by the visionary genius, 
      Tony Stark, our journey began with a singular mission: to push the boundaries of what's possible and 
      shape a better future for humanity.`}</p>
      <p>{`From our humble beginnings as a weapons manufacturer, we've evolved into a global leader in advanced technology, 
      pioneering groundbreaking solutions that redefine industries and change lives.`}</p>
      <p>{`Our commitment to innovation knows no bounds. We invest tirelessly in research and development, 
      pushing the limits of science and engineering to create technologies that solve the world's most pressing challenges.`}</p>
      <p>{`But innovation isn't just about creating the next big thing — it's about making a difference. 
      Whether it's developing clean energy solutions to combat climate change, revolutionizing healthcare 
      with cutting-edge medical devices, or enhancing personal safety with state-of-the-art defense technology, 
      everything we do is driven by a passion to make the world a better, safer place.`}</p>
      <p>{`At Stark Industries, our greatest asset is our people. We're a team of the brightest minds and the most talented engineers, united by a shared vision and a relentless pursuit of excellence. 
      Together, we dream big, challenge the status quo, and dare to imagine a future where anything is possible.`}</p>
      <p>{`Join us on our journey as we continue to push the boundaries of innovation and inspire the next generation
       of leaders, inventors, and superheroes.`}</p>
      <p>Stark Industries — Pioneering Innovation for a Better Tomorrow.</p>
    </>
  );
}
