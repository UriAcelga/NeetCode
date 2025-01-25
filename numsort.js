function swap(nums,n1,n2) {
    let aux = nums[n1];
    nums[n1] = nums[n2];
    nums[n2] = aux;
}

function partition(nums, low, high) {
    // el pivot izquierdo debe tener un valor menor al pivot derecho 
    if(nums[low] > nums[high])
        swap(nums, low, high);

    // pi -> pivot izquierdo / pd -> pivot derecho
    let j = low + 1;
    let g = high -1, k = low + 1,
        pi = nums[low], pd = nums[high];

    //
    while(k <= g) {
        if(nums[k] < pi) {
            swap(nums, k, j);
            j++;
        } else if (nums[k] >= pd) {
            while(nums[g] > pd && k < g)
                g--;

            swap(nums, k, g);
            g--;

            if(nums[k] < pi) {
                swap(nums, k , j);
                j++;
            }
        }
        k++;
    }
    j--;
    g++;

    swap(nums, low, j);
    swap(nums, high, g);
    return [j, g];
}

function dualPivotQuicksort(nums, low, high) {
    if(low < high) {
        let piv = [];
        piv = partition(nums, low, high);

        dualPivotQuicksort(nums, low, piv[0] - 1);
        dualPivotQuicksort(nums, piv[0] + 1, piv[1] - 1);
        dualPivotQuicksort(nums, piv[1] + 1, high);
    }
}



/**
 * Ordena arreglos numéricos en orden ascendente (no usar para strings u objetos)
 *
 * @param {number[]} nums
 */
function numsort(nums) {
    let ret = nums;
    dualPivotQuicksort(ret, 0, ret.length - 1);
    return ret;
}