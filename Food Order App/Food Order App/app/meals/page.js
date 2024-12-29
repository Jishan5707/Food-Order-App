import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicioue meal, created{" "}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>Choose your fav recipie and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="./meals/share">Share your fav recipie</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading Content</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
