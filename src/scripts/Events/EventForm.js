
const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eventsDiv')

export const EventFormComponent = () => {





const render = () => {

    contentTarget.innerHTML = `
  <h2>EVENTS</h2>
  <div class="eventForm">
      <form action="">
          <button class="addBtnEvent">Add Article</button><br>
          <label for="">Name</label>
          <input type="text"><br>
          <label for="">Date</label>
          <input type="date"><br>
          <label for="">Location</label>
          <input type="text">
      </form>
      <button class="saveBtnEvent">Save Article</button>
  </div>`
  }
  render()
  };