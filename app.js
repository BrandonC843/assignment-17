var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){


var repsContainerEl = document.querySelector('.congress-container')
var repsObjectList = serverRes.results

var largeHtmlString = ""
forEach(repsObjectList, function(repsObj){
   // console.log(repsObj)
// top of block
var firstN = repsObj.first_name
var lastN = repsObj.last_name
// 2nd block
var title = repsObj.title
var repsParty = repsObj.party
var state = repsObj.state_name
// 3rd block
var website = repsObj.website
var email = repsObj.email
var facebook = repsObj.facebook_id
var twitter = repsObj.twitter_id
// 4th block
var termEnd = repsObj.term_end
// console.log(termEnd)
// console.log(twitter)
// console.log(facebook)
// console.log(email)
// console.log(website)
// console.log(state)
// console.log(repsParty)
// console.log(lastN)
// console.log(firstN)
console.log(repsObj)

var listDiv = '<div class="col-md-4 congressList">'
   listDiv += '<h3>' + firstN + ' ' + lastN + '</h3>'
   listDiv += '<h4>' + title + ' - - ' + repsParty + '-'+ state + '</h4>'
   listDiv +=  '<ul>'
   listDiv += '<li>' + 'email: '+ email + '</li>'
   listDiv += '<li>' + 'website: '+ website + '</li>'
   listDiv += '<li>' + 'facebook: '+ facebook + '</li>'
   listDiv += '<li>' + 'twitter: '+ twitter + '</li>'
   listDiv += '</ul>'
   listDiv += '<p>' + 'Term End ' + termEnd + '</p>'
   listDiv += '</div>'

   largeHtmlString += listDiv
})
 repsContainerEl.innerHTML = largeHtmlString
})
