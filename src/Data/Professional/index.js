import moment from 'moment';

const m1 = moment([2016, 6, 1]);
const m2 = moment();
const diff = moment.duration(m2.diff(m1));

export default {
    personality: 'Professional',
    personalityId: 1,
    conversations: [
        {
            id: '1',
            parentId: '',
            question: `Tell me about yourself`,
            answer:
                'My name is Pritish Vaidya, I am a programmer, proficient in Javascript and its Frameworks',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '2',
            parentId: '',
            question: "What's your experience in programming?",
            answer: `My current experience in Programming is ${diff.years()} years, ${diff.months()} months, ${diff.days()} days`,
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3',
            parentId: '',
            question: 'What do you like to do outside of work?',
            answer: 'I like to play guitar, online multiplayer games',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4',
            parentId: '',
            question: 'What are your greatest professional strengths?',
            answer:
                "I love to re-design flow of the applications to make them simpler and faster. It's fun for me and over time I've gotten pretty good at it",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '5',
            parentId: '',
            question: 'What do you consider to be your weaknesses?',
            answer:
                'Sometimes I can be a bit too honest when I provide feedback to coworkers',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '6',
            parentId: '',
            question: "What's your dream job?",
            answer:
                'To develop and deliver scalable applications to a variety of organizations',
            mood: 'happy',
            sound: 'okay',
        },
        {
            id: '7',
            parentId: '',
            question: "What's your management style?",
            answer:
                'I don’t hang around and wait to be called upon by my direct reports, I go to them',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '8',
            parentId: '',
            question: "What's a time you exercised leadership?",
            answer:
                'When we had more projects than the employees, I took on the major tasks and guided my fellow employees',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '9',
            parentId: '',
            question: 'How would your boss and co-workers describe you?',
            answer:
                "Thoughtful and One who get's the job done using best practices",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '10',
            parentId: '',
            question: 'How do you deal with pressure or stressful situations?',
            answer:
                "I find that when I'm under the pressure of a deadline, I can do some of my most creative work",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '11',
            parentId: '',
            question: 'What people do you hate in your professional life?',
            answer:
                "Slackers, who just come to get their paycheques and people who can't follow the procedure even if being told multiple times",
            mood: 'okay',
            sound: 'okay',
        },
        {
            id: '12',
            parentId: '',
            question: 'Do you have any open source contributions',
            answer: 'I have contributed mostly on Stackoverflow, Github',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-1',
            parentId: '1',
            question: "That's great I love Javascript too!",
            answer: 'Wow, it is great to have something that we both like!',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-1',
            parentId: '1',
            question: 'What frameworks do you work on?',
            answer:
                'I have worked mostly in React Native and React. Apart from that I have also worked in Angular < 2 and Node.JS',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-1',
            parentId: '1',
            question: 'Are you a noob in Javascript?',
            answer: "I wouldn't say I am a noob in Javascript",
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '4-1',
            parentId: '1',
            question: 'I hate Javascript!',
            answer:
                "Perhaps you didn'n understand the use cases and concepts clearly",
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '1-2',
            parentId: '2',
            question: "That's a good experience",
            answer:
                'Thanks, I have been working since I got out of the college',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-2',
            parentId: '2',
            question: 'What applications have you developed until now?',
            answer:
                "A list of applications are visible on my website's portfolio",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-2',
            parentId: '2',
            question: 'Which framework are you currently working on?',
            answer: 'I am currently working in React Native and React',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-2',
            parentId: '2',
            question: 'So, you are really a noob!',
            answer: 'No .....!',
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '1-3',
            parentId: '3',
            question: 'I like your hobbies',
            answer: 'I really appreciate it',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '2-3',
            parentId: '3',
            question:
                'How do you manage to focus on them and at work at same time?',
            answer: 'Just some time management helps me sort the issues',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '3-3',
            parentId: '3',
            question: 'How much time do you spend on your hobbies?',
            answer:
                'I spend around 2-3 hours practicing guitar and an hour either playing games or watching the lates tournaments',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-3',
            parentId: '3',
            question: 'I hate online games!',
            answer: "Perhaps you haven't played any!",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-4',
            parentId: '4',
            question: 'So do you have an experience in the UI / UX too?',
            answer:
                'I just do a bit of designing for logos and creating some minor illustrations',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-4',
            parentId: '4',
            question:
                'Do you also like to create the applications from scratch?',
            answer: 'Yes, I love that too !',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-4',
            parentId: '4',
            question: 'What steps do you follow to redesign the applications?',
            answer:
                'There are some principles to take care for the UX and UI, and scalability of the system, clean redundant code etc',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-4',
            parentId: '4',
            question: 'That sounds lame!',
            answer: 'You sound lame too !',
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '1-5',
            parentId: '5',
            question: "That's good I like honest people",
            answer: 'Thanks , love your suggestion',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-5',
            parentId: '5',
            question:
                'Do you also like to create the applications from scratch?',
            answer: 'Yes, I love that too !',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-5',
            parentId: '5',
            question: 'What steps do you follow to redesign the applications?',
            answer:
                'There are some principles to take care for the UX and UI, and scalability of the system, clean redundant code etc',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-5',
            parentId: '5',
            question: "I'll be honest be with you, I don't like you",
            answer: 'Likewise!',
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '1-6',
            parentId: '6',
            question: "Wow!, that's nice to hear",
            answer: 'Thank you for the feedback',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-6',
            parentId: '6',
            question: "What is the most scalable app that you've built?",
            answer:
                "The most scalable app that I've build is RentZend.com. A property renting platform",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-6',
            parentId: '6',
            question: 'Define scalable on your terms',
            answer:
                'The scalable as mentioned would mean, supporting multiple users, on variety of platforms with a code that is understandable by other members',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-6',
            parentId: '6',
            question: "I have'nt worked on any scalable apps",
            answer: 'Well thats a pity',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-7',
            parentId: '7',
            question: "So you're direct in your approach, I like that!",
            answer: 'Thank you for the feedback',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-7',
            parentId: '7',
            question: 'That might sometimes cause issues too',
            answer: 'Yes, it happens sometimes',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-7',
            parentId: '7',
            question: '',
            answer:
                'The scalable as mentioned would mean, supporting multiple users, on variety of platforms with a code that is understandable by other members',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-7',
            parentId: '7',
            question: "Most people that I've encountered always prefer to wait",
            answer: "We'll I hate spoon feeding",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-8',
            parentId: '8',
            question: "That\'s awesome!",
            answer: 'Thanks',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-8',
            parentId: '8',
            question: 'That might sometimes cause issues too',
            answer: 'Yes, it happens sometimes',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-8',
            parentId: '8',
            question: 'I hope you\'re direct with your code too',
            answer:
                'Absolutely!',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-8',
            parentId: '8',
            question: "How many employees were under you?",
            answer: "The maximum number of employees that I had were 7",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-9',
            parentId: '9',
            question: "What do you mean by best practices?",
            answer: 'Writing clean and reusable code in latest tech supported cross platform',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '2-9',
            parentId: '9',
            question: 'How do you get the job done?',
            answer: 'I try various solutions and add the one most suitable',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-9',
            parentId: '9',
            question: 'How do you describe yourself as thoughtful?',
            answer: 'When I write my code, I think about the other people who will work on that too',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-9',
            parentId: '9',
            question: "I think you're lying",
            answer: "I think you're ignorant as well!",
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '1-10',
            parentId: '10',
            question: "How can you be creative under pressure?",
            answer: 'Finding different solutions to the problem under a deadline',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-10',
            parentId: '10',
            question: 'That means you should be kept under pressure always',
            answer: 'I suppose no one is happy working under pressure',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-10',
            parentId: '10',
            question: 'Do you like being pressured?',
            answer: 'I don\'t like it but it is beneficial for a healthy organisation',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-10',
            parentId: '10',
            question: "I think it is common to have it when the workload is more",
            answer: "Yes, absolutely!",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-11',
            parentId: '11',
            question: "How many slackers have you encountered till date?",
            answer: 'I\'ve encountered slackers in every job that I have been working on',
            mood: 'angry',
            sound: 'angry',
        },
        {
            id: '2-11',
            parentId: '11',
            question: 'How do you deal with them?',
            answer: 'Either make them own their responsibilities or ignore them',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '3-11',
            parentId: '11',
            question: 'I think there are slackers in every organisation',
            answer: 'That depends on the people\' motivation to work',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-11',
            parentId: '11',
            question: "Slacker\'s make life more difficult",
            answer: "Indeed they do!",
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '1-12',
            parentId: '12',
            question: "Great!",
            answer: 'Thanks!',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '2-12',
            parentId: '12',
            question: 'How often do you contribute?',
            answer: 'I try to contribute everyday if I\'m available',
            mood: 'happy',
            sound: 'happy',
        },
        {
            id: '3-12',
            parentId: '12',
            question: 'Are all your side projects open source?',
            answer: 'Most of them are open source',
            mood: 'normal',
            sound: 'okay',
        },
        {
            id: '4-12',
            parentId: '12',
            question: "Where are the links for your contributions?",
            answer: "They\'re all mentioned in my portfolio",
            mood: 'normal',
            sound: 'okay',
        },
    ],
};
