#include <iostream>
using namespace std;

int main() {
    int rows = 5; // Number of rows

    for (int i = 1; i <= rows; i++) { // Outer loop for rows
        // Print leading spaces
        for (int j = 1; j <= rows - i; j++) {
            cout << " "; // Adjust spacing for alignment
        }

        // Print the pattern of characters
        for (int j = 1; j <= (2 * i - 1); j++) {
            if (j % 2 == 0) {
                cout << "*"; // Example of alternate character
            } else {
                cout << "*"; // Example of starting character
            }
        }

        cout << endl; // Move to the next line
    }

    return 0;
}
