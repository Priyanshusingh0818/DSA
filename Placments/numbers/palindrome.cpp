#include<iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    int dup = n;
    int rev=0;
    while(n>0){
        int ld = n%10;
        rev = (rev*10) + ld;
        n = n/10;
    }
    if(dup == rev){
        cout << "Palindrome" << endl;
    } else {
        cout << "Not a Palindrome" << endl;
    }
}


// FOR A CHARACTER STRING INPUT, YOU CAN USE THE FOLLOWING CODE:
/* int main() {
    string str;
    cin >> str;
    string rev = string(str.rbegin(), str.rend());
    if (str == rev) {
        cout << "Palindrome" << endl;
    } else {
        cout << "Not a Palindrome" << endl;
    }
    return 0;
}
*/