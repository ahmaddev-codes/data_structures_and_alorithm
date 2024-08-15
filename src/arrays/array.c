#include <stdio.h>

/**
 * Array Operations and Implementation in C
 * - Insertion
 * - Update
 * - Deletion
 */

/**
 * Array Traversal Operation
 *
 * array: The array to traverse
 * size: The size of the array
 *
 * Returns: nothing
 */
void traversal(int array[], int size)
{
    for (int index = 0; index < size; index++)
    {
        if (index == 0)
            printf("[");

        printf("%d", array[index]);

        if (index < size - 1)
            printf(", ");

        if (index == size - 1)
            printf("]\n\n");
    }
}


/**
 * Array Insertion Operatio
 *
 * array: The array to insert into
 * size: The size of the array
 *
 * Returns: nothing
 */
void insertion(int array[], int size)
{
    for (int index = 0; index < size; index++)
    {
        if (index == 0) // initialize he first element in the list by 10
            array[index] += 10;

        else // increment subsequent element by adding 10 to the value of last updated element
            array[index] = array[index - 1] + 10;
    }
}


/**
 * Array Update Operation
 *
 * array: The array to update
 * data: the value to insert
 * position: The position of the element to insert
 *
 * Returns: nothing
 */
void update(int array[], int data, int position)
{
    array[position - 1] = data;
}

/**
 * Array Deletion Operation
 *
 * array: The array to update
 * data: the value to insert
 * position: The position of the element to insert
 *
 * Returns: nothing
 */
void deletion(int array[], int position)
{
    array[position - 1] = 0;
}

// main function to run all other functions
int main()
{
    int array[10] = {}, size = 10;

    printf("Original Array: ");
    traversal(array, size);

    printf("Inserting into Array...\n");
    insertion(array, size);

    // Array Traversal
    printf("Array after insertion: ");
    traversal(array, size);

    // Array Update
    printf("Updating a value in the array...\n");
    int value = 55, position = 6;
    update(array, value, position);

    // Array Traversal
    printf("Array after update: ");
    traversal(array, size);

    // Array deletion
    printf("Deleting an element in the array...\n");
    position = 9;
    deletion(array, position);

    printf("Array after deletion: ");
    traversal(array, size);

    return 0;
}
