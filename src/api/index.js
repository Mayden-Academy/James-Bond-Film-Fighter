const { $ } = global

export const getRandom = _ => $.get('/films/random')
