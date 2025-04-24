import './styles.css';

type Props = {
  text: string;
};

export default function PageText({ text }: Props) {
  return (
        <div className='pgtext'>
        <h1>{text}</h1>
        </div>
  );
}
