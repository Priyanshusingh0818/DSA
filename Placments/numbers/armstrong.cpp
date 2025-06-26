#include<iostream>
#include<cmath>
using namespace std;

int main() {
    int n, dup, sum = 0;
    cin >> n;
    dup = n;

    int digits = log10(n) + 1; // Calculate the number of digits

    while (n > 0) {
        sum += pow(n % 10, digits); // Add each digit raised to the power of digits
        n /= 10;
    }

    if (dup == sum) {
        cout << "Armstrong number" << endl;
    } else {
        cout << "Not an Armstrong number" << endl;
    }

    return 0;
}
