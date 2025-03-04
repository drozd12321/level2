"use client";

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  JSX,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import styles from "./Raing.module.css";
interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEdit?: boolean;
  rating?: number;
  setRating?: (rating: number) => void;
}
const Rating = ({
  rating = 0,
  isEdit = false,
  setRating,
  className,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructorArray = (carruneRating: number) => {
    const updateArray = ratingArray.map((rt: JSX.Element, ind: number) => {
      return (
        <div key={ind}>
          {ind < carruneRating ? (
            <GoStarFill
              className={styles.ic}
              onMouseEnter={() => changeDisplay(ind + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => changeRating(ind + 1)}
              tabIndex={isEdit ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) => {
                console.log(e.key);
              }}
            />
          ) : (
            <FiStar
              className={styles.empty}
              onMouseEnter={() => changeDisplay(ind + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => changeRating(ind + 1)}
              tabIndex={isEdit ? 0 : -1}
            />
          )}
        </div>
      );
    });
    setRatingArray(updateArray);
  };
  useEffect(() => {
    constructorArray(rating);
  }, [rating]);
  function changeDisplay(i: number) {
    if (!isEdit) {
      return;
    }
    constructorArray(i);
  }
  const changeRating = (i: number) => {
    if (!isEdit || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props} className={styles.dv}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
