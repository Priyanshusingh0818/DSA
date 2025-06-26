#include<iostream>
using namespace std;

int main(){
    int arr[6] = {3,5,7,2,5,4};
    int largest = arr[0];
    for(int i=0; i<6; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
        cout << "Current largest: " << largest << endl;
    }
    return largest;
}