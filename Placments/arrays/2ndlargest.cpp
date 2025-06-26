#include <iostream>  // Include the iostream library for input/output operations
#include <climits>   // Include the climits library for INT_MIN (minimum possible integer value)
using namespace std; // Use the standard namespace to avoid prefixing 'std::'

/**
 * Function to find the second largest element in an array
 * @param arr - Input array
 * @param n - Size of the array
 * @return - Second largest element or -1 if not found
 */
int findSecondLargest(int arr[], int n) {
    // If the array has fewer than two elements, finding the second largest is not possible
    if (n < 2) {
        cout << "Array must have at least two elements." << endl;
        return -1; // Return -1 to indicate error
    }

    // Initialize variables to hold the largest and second largest elements
    int largest = INT_MIN;      // Start with the smallest possible integer
    int secondLargest = INT_MIN; // Start with the smallest possible intege

    // Traverse the array to find the largest and second largest elements
    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {      // If the current element is greater than the largest
            secondLargest = largest; // Update secondLargest to be the current largest
            largest = arr[i];        // Update largest to be the current element
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            // If the current element is greater than secondLargest but not equal to largest
            secondLargest = arr[i]; // Update secondLargest to the current element
        }
    }

    // If secondLargest is still INT_MIN, it means no second largest element was found
    return (secondLargest == INT_MIN) ? -1 : secondLargest;
}

int main() {
    int arr[] = {3, 5, 7, 2, 5, 4};        // Define the input array
    int n = sizeof(arr) / sizeof(arr[0]);  // Calculate the size of the array

    int result = findSecondLargest(arr, n); // Call the function to find the second largest element

    // Check the result and print the appropriate message
    if (result == -1) {
        cout << "No second largest element found." << endl;
    } else {
        cout << "The second largest element is: " << result << endl;
    }

    return 0; // Return 0 to indicate successful execution
}
