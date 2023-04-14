const canvas = document.querySelector('.canvas');
const fragment = document.createDocumentFragment();
const btn = document.querySelector('button');
const grid = [20, 20];
const col = grid[0];
const row = grid[1];
const field = col * row;

for (let i = 0; i < field; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
    div.className = 'tail';
}

canvas.appendChild(fragment);

const stageAnimation = anime.timeline({
    targets: '.tail',
    easing: 'easeInBack',
    delay: anime.stagger(10, { from: 'last' }),
    duration: 2000,
    endDelay: 1000,
    loop: true,
    autoplay: false,
})
.add({ //spread the grid boxes to random spots
    translateX: () => anime.random((-window.innerWidth-100), window.innerWidth-100),
    translateY: () => anime.random((-window.innerHeight-100), window.innerHeight-100),
    //starts the spread from the last grid box
    delay: anime.stagger(200, { grid: grid, from: 'last' }),
    scale: .5, //scale of the dot
    backgroundColor: '#797ef6',
    borderRadius: '50%',
})
.add({ //rotates the canvas
    targets: canvas,
    rotate: 900,
    duration: 5000,
    easing: 'easeOutBounce',
})
.add({//brings back to normal
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(5, { grid: grid, from: 'center' }),
    duration: 3000,
    backgroundColor: '#1aa7ec',
})
.add({// stagger animation starts at the first grid box
    translateX: [
        {
            value: anime.stagger('-.1em', {
                grid: grid,
                from: 'first',
                axis:'x',
            }),
        },
        {
            value: anime.stagger('.1em', {
                grid: grid,
                from: 'first',
                axis:'x',
            }),
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: 'first',
                axis:'x',
            }),
        },
    ],
    translateY: [
        {
            value: anime.stagger('.1em', {
                grid: grid,
                from: 'last',
                axis: 'y'
            })
        },
        {
            value: anime.stagger('-.1em', {
                grid: grid,
                from: 'last',
                axis: 'y'
            })
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: 'last',
                axis: 'y'
            })
        },
    ],
    delay: anime.stagger(100, { grid: grid, from: 'last' }),
    scale: .7,
    backgroundColor: '#1e2f97',
    borderRadius: 0,
})
.add({ //last animation starts in the center
    translateX: [
        {
            value: anime.stagger('-5px', {
                grid: grid,
                from: 'center',
                axis:'x',
            }),
        },
        {
            value: anime.stagger('5px', {
                grid: grid,
                from: 'center',
                axis:'x',
            }),
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: 'center',
                axis:'x',
            }),
        },
    ],
    translateY: [
        {
            value: anime.stagger('-5px', {
                grid: grid,
                from: 'center',
                axis: 'y'
            })
        },
        {
            value: anime.stagger('5px', {
                grid: grid,
                from: 'center',
                axis: 'y'
            })
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: 'center',
                axis: 'y'
            })
        },
    ],
    delay: anime.stagger(100, { grid: grid, from: 'center' }),
    scale: 1,
    backgroundColor: '#ffffff',
})

// btn.addEventListener('click', () => {
//     stageAnimation.play();
// } )

// stageAnimation.play();