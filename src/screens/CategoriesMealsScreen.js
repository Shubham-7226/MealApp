import React from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoriesMealsScreen = props => {
  var catId = props.route.params;
  if (typeof catId !== 'undefined') {
    var displayedMeals = MEALS.filter(
      meal => meal.categoryIds.indexOf(catId) >= 0,
    );
  } else {
    console.log('in else');
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoriesMealsScreen;
