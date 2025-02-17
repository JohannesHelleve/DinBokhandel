import StepCard from "./StepCard";

export default function CustomTimeline() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="w-full flex justify-end pr-20">
        <StepCard step={{ title: 'Bli grassrotstøtter!', description: 'Når du kjøper en bok på nettet så går pengene til de store aktørene. Vi gir pengene til din bokhandel.' }} />
      </div>
      <div className="w-full flex justify-start pl-20">
        <StepCard step={{ title: 'Velg din lokale bokhandel', description: 'Ved å velge din bokhandel så er det de som får profiten!' }} />
      </div>
      <div className="w-full flex justify-end pr-20">
        <StepCard step={{ title: 'Du får boken i postkassa', description: 'Vi sender den til postkassen din.' }} />
      </div>
    </div>
);
}

