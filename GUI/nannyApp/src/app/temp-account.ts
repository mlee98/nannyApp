import { Account } from './models';

export const TEMP_ACCOUNT: Account = {
  id: 1,
  firstName: 'Bob',
  lastName: 'Johnson',
  email: 'bobjohnson@gmail.com',
  phone: '5125436733',
  address: '32 Sunshine Ave',
  city: 'Dallas',
  state: 'TX',
  zip: 75275,
  gender: 'Male',
  age: 27,
  type: 'parent',

  // PARENT account info
  children: [
    {
      name: 'Jenny',
      gender: 'Female',
      age: 4,
      likes: 'Hello Kitty, Teletubbies, Bananas, Pocahontas',
      allergies: 'Peanut butter',
      medications: 'Benadryl',
      specialReqs: 'No TV 2 hours before bedtime',
    },
    {
      name: 'Max',
      gender: 'Male',
      age: 3,
      likes: 'Teletubbies, Bionicles, Rabbits',
      allergies: 'None',
      medications: 'None',
      specialReqs: 'No TV 2 hours before bedtime',
    }
  ],
  parentJobs: [
    {
      id: 2,
      isComplete: false,
      familyName: 'Smith',
      nannyName: 'Stokes', nannyPhone: '8179999999',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      duration: 'Dec 14-16',
      address: '4444 Bob Road', city: 'Dallas', state: 'Texas', zip: 75206,
      tasks: [
        {
          name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge',
          location: 'fdsfsd', day: 'Mon', completed: true
        },
        {
          name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer',
          location: '1111 Soccer Field Place', day: 'Tues'
        }
      ],
    }
  ],

  // NANNY account info
  yearsExp: 3,
  minAge: 8,
  maxAge: 14,
  minWage: 15,
  maxWage: 20,
  cpr: true,
  canDrive: false,
  canCook: true,
  petFriendly: true,

  bio: 'I love working with all ages, though I have the most experience working with ages 8-14.' +
      ' I can cook almost any meal, and I don\'t mind taking care of a couple of pets if needed!' +
      ' Along with my years of experience working as a nanny, I\'ve spent the last 2 years' +
      ' working part-time at a daycare.',
  references: [
    {
      name: 'Ryan Reynolds',
      phone: '5124687344',
      email: 'rreynolds@gmail.com',
    },
    {
      name: 'Hilary Duff',
      phone: '2146723541',
      email: 'hilaryduff@gmail.com',
    }
  ],
  nannyJobs: [
    {
      id: 1, isAccepted: false, isComplete: false,
      familyName: 'Lee',
      nannyName: 'Stokes',
      parentPhone: '9998887766',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      duration: 'Dec 12-14', address: '4444 Bob Road', city: 'Dallas', state: 'Texas', zip: 75206,
      tasks: [
        {
          name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge',
          location: 'fdsfsd', day: 'Mon'
        },
        {
          name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer',
          location: '1111 Soccer Field Place', day: 'Tues'
        }
      ],
      children: [
        {
          name: 'Johnny', age: 18, gender: 'male', allergies: 'gluten, milk',
          medications: 'ADHD', likes: 'Likes to play ball'
        },
        {
          name: 'Billy', age: 14, gender: 'male', allergies: 'gluten, milk',
          medications: 'none', specialReqs: 'Plays too much fortnite'
        }
      ]
    },
    {
      id: 2,
      isAccepted: true,
      isComplete: false,
      familyName: 'Smith',
      nannyName: 'Stokes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
      duration: 'M-T-W 12:00-8:00', address: '4444 Bob Road', city: 'Dallas',
      state: 'Texas', zip: 75206,
      tasks: [
        {
          name: 'Lunch', time: '12:00PM', description: 'Warm leftovers in fridge',
          location: 'fdsfsd', day: 'Mon'
        },
        {
          name: 'Soccer Practice', time: '3:00PM', description: 'Take lil jimmy to soccer',
          location: '1111 Soccer Field Place', day: 'Tues'
        }
      ],
      children: [
        {
          name: 'Johnny', age: 18, gender: 'male', allergies: 'gluten, milk',
          medications: 'ADHD', likes: 'Likes to play ball'
        },
        {
          name: 'Billy', age: 14, gender: 'male', allergies: 'gluten, milk',
          medications: 'none', specialReqs: 'Plays too much fortnite'
        }
      ]
    },
    {id: 3, isAccepted: true, isComplete: false, familyName: 'Jones', nannyName: 'Dillard', tasks: []},
    {id: 4, isAccepted: true, isComplete: false, familyName: 'Brodsffs', nannyName: 'Cage', tasks: []},
    {id: 5, isAccepted: true, isComplete: true, familyName: 'Obama', nannyName: 'Knight', tasks: []}
  ],
};
