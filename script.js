// Get elements
const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const calculateBtn = document.getElementById('calculateBtn');
const balanceText = document.getElementById('balanceText');
const statusText = document.getElementById('statusText');
const budgetForm = document.getElementById('budgetForm');

// Function to calculate budget balance
function calculateBalance(event) {
    event.preventDefault();

    const income = parseFloat(incomeInput.value);
    const expenses = parseFloat(expensesInput.value);

    if (isNaN(income) || isNaN(expenses)) {
        balanceText.textContent = 'Please enter valid numbers for income and expenses.';
        statusText.textContent = 'Status: Invalid Input';
        return;
    }

    const balance = income - expenses;

    // Update result section based on balance
    balanceText.textContent = `Balance: $${balance.toFixed(2)}`;
    
    if (balance < 0) {
        statusText.textContent = 'Status: You are in deficit!';
        statusText.style.color = 'red';
    } else if (balance === 0) {
        statusText.textContent = 'Status: Your budget is balanced.';
        statusText.style.color = 'orange';
    } else {
        statusText.textContent = 'Status: You have a surplus!';
        statusText.style.color = 'green';
    }
}

// Attach event listener to form
budgetForm.addEventListener('submit', calculateBalance);
