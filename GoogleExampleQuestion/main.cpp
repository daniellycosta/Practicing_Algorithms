#include <iostream>

/*Algorithm challenge seen on the video "How to: Work at Google — Example Coding/Engineering Interview: https://www.youtube.com/watch?v=XKu_SEDAykw"
 * that consists in look for a pair of numbers in an ordered array that its sum is iquals to a desired answer.
 *
 * Complexity Archieved: O(n)
*/

using namespace std;

bool thereIsPossibleSum(int *array, int sumDesired, int leftIterator, int rightIterator){
    int sum = array[leftIterator] + array[rightIterator];
    if(sum == sumDesired){
        return true;
    }else if(sum < sumDesired){
        leftIterator++;
    }
    else{
        rightIterator--;
    }
    if(leftIterator < rightIterator){
        thereIsPossibleSum(array,sumDesired,leftIterator, rightIterator);
    }else{
        return false;
    }
}

int main(){
    int arrayA[4]={1,2,3,9};
    int arrayB[4]={1,2,4,4};

    cout <<"ARRAY A: "<< thereIsPossibleSum(arrayA,8,0,3)<<endl;
    cout <<"ARRAY B: "<< thereIsPossibleSum(arrayB,8,0,3)<<endl;

    return 0;
}
