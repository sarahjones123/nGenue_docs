document$.subscribe(() => {
    const instance = new Typewriter('#typewriter', {
        strings: [
            'natural gas marketers', 
            'producers',
            'distributors',
            'LDCs',
            'utilities',
            'pipelines',
        ],
        autoStart: true,
        loop: true,
    });
})