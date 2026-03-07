import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { slug } = useParams();

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">{slug}</h1>
      <p className="text-lg text-slate-600">
        Detailed information about this service will appear here.
      </p>
    </div>
  );
}
