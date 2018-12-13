const { $ } = global

export const getRandom = _ => $.get('/films/random')

export const sendPlay = (postData) => $.ajax({url: '/films', dataType: 'json', type: 'post', contentType: 'application/json', data: JSON.stringify(postData)})