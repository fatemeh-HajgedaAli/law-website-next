export default function TestimonialCard({ testimonial }) {
  return (
    <article>
      <div>
        <span>"</span>

        <h3>{testimonial.text}</h3>
      </div>

      <div>
        <div>
          <img src={testimonial.avatar} alt={testimonial.name} />
        </div>

        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.position}</span>
        </div>
      </div>
    </article>
  );
}
