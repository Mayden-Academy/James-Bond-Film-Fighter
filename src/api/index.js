const { $ } = global

export const getRandom = _ => $.get('/films/random')

export const sendPlay = (postData) => $.post('/films', postData)