interface IMentor {
  name: string;
  url: string;
  image: string;
  subtitle: string;
}

interface IMentors {
  data: [IMentor];
}

const Mentor = ({ data }: IMentors) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {data.map((mentor) => (
      <a href={mentor.url} key={mentor.name} target="_blank" rel="noreferrer">
        <div className="border-custom-blue-500 border-2 rounded-md p-5 cursor-pointer">
          <img src={mentor.image} alt={mentor.name} className="rounded-full" />
          <h3 className="text-center">{mentor.name}</h3>
          <p className="text-center text-gray-400">{mentor.subtitle}</p>
        </div>
      </a>
    ))}
  </div>
);

export default Mentor;
