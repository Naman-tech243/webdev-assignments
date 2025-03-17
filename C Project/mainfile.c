#include <stdio.h>

// Structure to represent a bank account
struct Account {
    int accountNumber;
    float balance;
};

// Function prototypes
void displayMenu();
float checkBalance(struct Account);
void deposit(struct Account*, float);
void withdraw(struct Account*, float);

int main() {
    struct Account myAccount = {123456, 100000.0}; // Initialize account with account number and balance
    int choice;
    float amount;

    printf("Welcome to the ATM Simulator\n");
    
    do {
        displayMenu();
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Your balance is: Rs.%.2f\n", checkBalance(myAccount));
                break;
            case 2:
                printf("Enter amount to deposit: ");
                scanf("%f", &amount);
                deposit(&myAccount, amount);
                break;
            case 3:
                printf("Enter amount to withdraw: ");
                scanf("%f", &amount);
                withdraw(&myAccount, amount);
                break;
            case 4:
                printf("Exiting the program. Thank you!\n");
                break;
            default:
                printf("Invalid choice. Please enter a valid option.\n");
        }
    } while (choice != 4);

    return 0;
}

// Function to display the ATM menu
void displayMenu() {
    printf("\nATM Menu:\n");
    printf("1. Check Balance\n");
    printf("2. Deposit\n");
    printf("3. Withdraw\n");
    printf("4. Exit\n");
}

// Function to check account balance
float checkBalance(struct Account acc) {
    return acc.balance;
}

// Function to deposit money into account
void deposit(struct Account *acc, float amount) {
    acc->balance += amount;
    printf("Deposit of Rs.%.2f successful. New balance: Rs. %.2f\n", amount, acc->balance);
}

// Function to withdraw money from account
void withdraw(struct Account *acc, float amount) {
    if (amount <= acc->balance) {
        acc->balance -= amount;
        printf("Withdrawal of Rs.%.2f successful. New balance: Rs.%.2f\n", amount, acc->balance);
    } else {
        printf("Insufficient funds. Withdrawal failed.\n");
    }
}