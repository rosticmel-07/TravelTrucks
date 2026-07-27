import css from './Loader.module.css';

type LoaderProps = {
  title?: string;
  description?: string;
};

export default function Loader({
  title = 'Loading tracks...',
  description = 'Please wait while we fetch the best travel trucks for you',
}: LoaderProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.spinner} />
      <p className={css.title}>{title}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
}
