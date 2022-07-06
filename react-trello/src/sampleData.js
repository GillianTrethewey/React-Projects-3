const boards = [
	{
		id: 1000,
		title: 'Course Ideas',
		background: '#ffad33',
	},
	{
		id: 2000,
		title: 'House Ideas',
		background: '#80ccff',
	},
	{
		id: 3000,
		title: 'Garden Ideas',
		background: '#ff3300',
	},
]

const lists = [
	{
		id: 100,
		title: 'House ideas',
		board: 1000,
		cards: [
			{
				id: 1,
				text: 'Paint bedrooms this summer',
			},
			{
				id: 2,
				text: 'New Kitchen',
			},
		],
	},
	
	{
		id: 200,
		title: 'Travel ideas',
		board: 1000,
		cards: [
			{
				id: 11,
				text: 'Cruise under Niagara Falls',
			},
			{
				id: 22,
				text: 'Climb Syndney Harbour Bridge',
			},
		],
	},
		
	{
		id: 300,
		title: 'Travel ideas 2',
		board: 2000,
		cards: [
			{
				id: 111,
				text: 'See the Northern Lights',
			},
			{
				id: 222,
				text: 'Visit the Great Wall of China',
			},
		],
	},
]

const data = {
	boards,
	lists,
}

export default data

