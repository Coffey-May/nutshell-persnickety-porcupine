// Took from Workforce EmployeeList.js

// import { useComputers } from "./ComputerDataProvider.js"
// import { useEmployees } from "./EmployeeDataProvider.js"
// import Employee from "./Employee.js"

// import { useDepartments } from "./DepartmentDataProvider.js"
// import { useLocations } from "./LocationDataProvider.js"

// import { useCustomers } from "./CustomerDataProvider.js"
// import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"


import { useFriends } from "./FriendProvider.js"
import { useUsers } from "../Users/UserProvider.js"

import { FriendCard } from "./Friend.js"


const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".friendsList")


const FriendList = () => {
    // debugger

    eventHub.addEventListener("click", clickEvent => {

        const myFriends = useFriends()
        const matchingUsers = useUsers()


        // const computers = useComputers()
        // const employees = useEmployees()
        // const departments = useDepartments()
        // const locations = useLocations()
        // const customers = useCustomers()
        // const empCust = useEmployeeCustomers()


        // const empContractLength = null
        // const employeeCustomers = null

        if (clickEvent.target.id === "saveBtnFriend") {



            // contentTarget.innerHTML = employees.map(employee => {

            // Find this computer assigned to emplyee  - via computers object using
            //  find when the id matches the foreign key in the employee called computerId 
            const type = computers.find(type => type.id === employee.computerId)

            // Find the department employee work in using departmentId 
            const dept = departments.find(dept => dept.id === employee.departmentId)

            // Find the location the emp work at using locationId
            const office = locations.find(office => office.id === employee.locationId)

            // Find all customer relationships for the current employee

            const customerRelationships = empCust.filter(ec => ec.employeeId === employee.id)

            // For each relationship, find the company they work at
            // const foundCustomersArray = customerRelationships.map(crel => {
            //     const foundCustomer = customers.find(customer => customer.id === crel.customerId)
            //     // These are attaching the rate and contractLength to the foundCustomer array
            //     // and passing them thru to be used by employee.js
            //     foundCustomer.rate = crel.rate
            //     foundCustomer.contractLength = crel.contractLength
            //     foundCustomer.hiringManager = crel.hiringManager

            // })

                render(allNutshellFriends)

                console.log(clickEvent.target.id)



                const addFriendEvent = new CustomEvent("saveFriendButtonClicked", {
                    // detail: {

                    //     friend: friend.friendName
                    // }

                })
                eventHub.dispatchEvent(addFriendEvent)
            
        }
    
})

const render = (friends) => {
    contentTarget.innerHTML += `
 
          <div>
            <div>
            <h2> My Nutty Friends </h2>
            </div>
        
            <section class="friend__lineItem">     
            
                    <div class="friend__item">

                        ${
        friends.map(friendObject => {
            const userHTML = FriendCard(friendObject)
            return userHTML
        }).join("")

        }
                    </div>
            </section>
        </div>  


`
};

render()

}
            
        


export default FriendList





// const render = (friends) => {
//     contentTarget.innerHTML += `

//           <div>
//             <div>
//             <h2> My Nutty Friends </h2>
//             </div>

//             <section class="friend__lineItem">     

//                     <div class="friend__item">

//                         ${
//         friends.map(friendObject => {
//             const userHTML = FriendCard(friendObject)
//             return userHTML
//         }).join("")

//         }
//                     </div>
//             </section>
//         </div>  


// `
// };