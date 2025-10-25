import classNames from "classnames";
import styles from "./trip-popover.module.css";
import { BiX, BiSolidStar, BiSolidSquare } from "react-icons/bi";
import Button from "../button";
import Chance from "chance";
import { useRef } from "react";

const chance = new Chance();

type Props = {
  className?: string;
  id?: string;
  onDismiss?: () => void;
};

const TripPopover = ({ className, id, onDismiss }: Props) => {
  const priceRef = useRef<number>(chance.floating({ min: 5, max: 40 }));
  const pickupDistanceRef = useRef<number>(
    chance.floating({ min: 5, max: 20 })
  );
  const dropoffDistanceRef = useRef<number>(
    chance.floating({ min: 10, max: 40 })
  );
  const pickupLocationRef = useRef<string>(chance.address());
  const dropoffLocationRef = useRef<string>(chance.address());
  const userStarsRef = useRef<number>(chance.floating({ min: 3, max: 5 }));

  return (
    <div id={id} className={classNames(styles.TripPopover, className)}>
      <div className={styles.header}>
        <span className={styles.category}>Comfort</span>
        <button
          type="button"
          onClick={onDismiss}
          className={styles.dismissButton}
        >
          <BiX />
        </button>
      </div>
      <span className={styles.price}>${priceRef.current.toFixed(2)}</span>
      <div className={styles.userInfo}>
        <div className={styles.userStars}>
          <BiSolidStar />
          <span>{userStarsRef.current.toFixed(2)}</span>
        </div>
      </div>
      <ul className={styles.stops}>
        {[
          [
            `${Math.round(pickupDistanceRef.current)} mins (${(
              pickupDistanceRef.current * 1.60934
            ).toFixed(1)} mi) away`,
            pickupLocationRef.current,
          ],
          [
            `${Math.round(dropoffDistanceRef.current)} mins (${(
              dropoffDistanceRef.current * 1.60934
            ).toFixed(1)} mi) trip`,
            dropoffLocationRef.current,
          ],
        ].map(([distance, location], index) => (
          <li className={styles.stop} key={index}>
            <BiSolidSquare className={styles.stopBullet} />
            <div className={styles.stopLine} />
            <span className={styles.stopDistance}>{distance}</span>
            <span className={styles.stopLocation}>{location}</span>
          </li>
        ))}
      </ul>
      <Button className={styles.match}>Accept</Button>
    </div>
  );
};

export default TripPopover;
