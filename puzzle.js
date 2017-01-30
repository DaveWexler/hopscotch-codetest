// is_moveable?
// move_left
// move_right
// move_up
// move_down

var cells = document.getElementsByTagName('td')
var empty_coords

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function(){
    set_empty_coords()
    if (!is_moveable(this)) {
      return
    } else if (is_moveable(this) === "horizontal"){
      var spaces = parseInt(get_coords(this)[0]) - parseInt(empty_coords[0])
      move_horizontal(this, spaces)
    } else if (is_moveable(this) === "vertical"){
      var spaces = parseInt(get_coords(this)[1]) - parseInt(empty_coords[1])
      move_vertical(this, spaces)
    }
  })
}

function set_empty_coords() {
  empty_coords = document.getElementsByClassName('empty')[0].id.split("-")
}

function get_empty_cell() {
  set_empty_coords()
  return document.getElementsByClassName('empty')[0]
}

function get_coords(cell) {
  return cell.id.split("-")
}

function is_moveable(cell) {
  var coords = cell.id.split("-")
  if (cell.classList[0] == "empty") {
    return false
  } else if (coords[0] === empty_coords[0]){
    return "vertical"
  } else if (coords[1] === empty_coords[1]) {
    return "horizontal"
  } else {return false}
}

function move_horizontal(cell, spaces) {
  if (spaces === 0) {
    cell.innerHTML = ""
    cell.className = "empty"
  } else if (spaces < 0) {
    var empty_cell = get_empty_cell()
    var adjacent = document.getElementById((parseInt(empty_coords[0]) - 1) + "-" + get_coords(cell)[1])
    var new_val = adjacent.innerHTML
    empty_cell.innerHTML = new_val
    empty_cell.className = ""
    adjacent.innerHTML = ""
    adjacent.className = "empty"
    move_horizontal(cell, spaces+1)
  } else if (spaces > 0) {
    var empty_cell = get_empty_cell()
    var adjacent = document.getElementById((parseInt(empty_coords[0]) + 1) + "-" + get_coords(cell)[1])
    var new_val = adjacent.innerHTML
    empty_cell.innerHTML = new_val
    empty_cell.className = ""
    adjacent.innerHTML = ""
    adjacent.className = "empty"
    move_horizontal(cell, spaces-1)
  }
}

function move_vertical(cell, spaces) {
  if (spaces === 0) {
    cell.innerHTML = ""
    cell.className = "empty"
  } else if (spaces < 0) {
    var empty_cell = get_empty_cell()
    var adjacent = document.getElementById(get_coords(cell)[0] + "-" + (parseInt(empty_coords[1]) - 1))
    var new_val = adjacent.innerHTML
    empty_cell.innerHTML = new_val
    empty_cell.className = ""
    adjacent.innerHTML = ""
    adjacent.className = "empty"
    move_vertical(cell, spaces+1)
  } else if (spaces > 0) {
    var empty_cell = get_empty_cell()
    var adjacent = document.getElementById(get_coords(cell)[0] + "-" + (parseInt(empty_coords[1]) + 1))
    var new_val = adjacent.innerHTML
    empty_cell.innerHTML = new_val
    empty_cell.className = ""
    adjacent.innerHTML = ""
    adjacent.className = "empty"
    move_vertical(cell, spaces-1)
  }
}
