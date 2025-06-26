#include <iostream>
#include <vector>
using namespace std;

// Function to find all divisors of a number
vector<int> findDivisors(int num) {
    vector<int> divisors;
    for (int i = 1; i <= num / 2; ++i) {
        if (num % i == 0) {
            divisors.push_back(i);
        }
    }
    divisors.push_back(num); // Add the number itself
    return divisors;
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;

    vector<int> divisors = findDivisors(number);

    cout << "The divisors of " << number << " are: ";
    for (int divisor : divisors) {
        cout << divisor << " ";
    }
    cout << endl;

    return 0;
}
