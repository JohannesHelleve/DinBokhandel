import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

type Step = {   
    title: string;
    description: string;
    };


export default function StepCard({ step }: { step: Step }) {
  return (
    <Card className='bg-white shadow-lg rounded-lg h-50 w-4/9 mt-10'>
      <CardContent>
        <h2 className='text-4xl font-bold'>{step.title}</h2>
        <p className='mt-4 text-2xl'>{step.description}</p>
      </CardContent>
    </Card>
  );
}