"use client";

import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  JSX,
  useCallback,
  useEffect,
  useState,
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
  rating = 4,
  isEdit = false,
  setRating,
  className,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructorArray = useCallback((carruneRating: number) => {
    const updateArray = ratingArray.map((rt: JSX.Element, ind: number) => {
      return (
        <div key={ind}>
          {ind < carruneRating ? (
            <GoStarFill className={styles.ic} />
          ) : (
            <FiStar className={styles.empty} />
          )}
        </div>
      );
    });
    setRatingArray(updateArray);
  }, []);
  useEffect(() => {
    constructorArray(rating);
  }, [rating, constructorArray]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
