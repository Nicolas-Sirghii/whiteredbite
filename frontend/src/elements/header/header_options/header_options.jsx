import { AddNewCard } from "./add_new_card";
import { LearningOptions } from "./learning_options";


export function HeaderOptions() {
  return (
    <div className="header-options">
      <AddNewCard />
      <LearningOptions />
    </div>
  );
}