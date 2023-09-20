import styles from './Time.module.scss';

const Time = ({ time }) => {
  let milliseconds = parseInt((time % 1000) / 100);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return (
    <p className={styles.time}>
      {hours}:{minutes}:{seconds}.{milliseconds}
    </p>
  );
};

export default Time;
