import Person from './Person';

export class Review {
  createdAt: Date;
  reviewer: Person;
  comment: string;
  rating: number; // 0-100
  visible: boolean;
  disabled: boolean;
  agreeing: Person[]; // "Like" the review, for other people, without needing to comment themselves (for example people might many people might complain about the same thing and would agree with the rating)
}

// Require people to add comments unless rating 100%, so if they have anything to say, they must, otherwise they shut up.
// Non-explanatory bad reviews will be allowed to be disabled by admin.
// Users reviews of products can change at any time, so they're not associated with a purchase, and you can comment without a
// registered purchase on the site, but people will be able to see how many times you've purchased the item ON SITE if you make a review.

export class Category {
  name: string;
  parent: Category;
}

export class Tag {
  name: string;
}
