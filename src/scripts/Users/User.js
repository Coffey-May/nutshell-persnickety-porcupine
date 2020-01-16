const userComponent = (user) => {
  return `
      <div class="user">
              <div>Suspect: ${user.suspect}</div>
              <div>Date: ${user.date}</div>
              <div>Note: ${user.text}</div>
      </div>
  `
}

export default userComponent