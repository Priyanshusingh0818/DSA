#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n; // Input the number

    int revnum = 0; // Initialize revnum to store the reversed number

    while (n > 0) {
        int ld = n % 10; // Extract the last digit
        revnum = (revnum * 10) + ld; // Build the reversed number
        n = n / 10; // Remove the last digit
    }

    cout << "Reversed number: " << revnum << endl; // Output the reversed number

    return 0;
}
