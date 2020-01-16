const userComponent = (note) => {
  return `
      <div class="note">
              <div>Suspect: ${note.suspect}</div>
              <div>Date: ${note.date}</div>
              <div>Note: ${note.text}</div>
      </div>
  `
}

export default userComponent