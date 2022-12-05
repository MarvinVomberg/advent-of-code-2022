<?php

$file = file_get_contents('day4.txt');
$input = explode(PHP_EOL, $file);

$no = 0;
foreach ($input as $line){
    [$first, $second] = explode(',', $line);
    $first = range(explode('-', $first)[0], explode('-', $first)[1]);
    $second = range(explode('-', $second)[0], explode('-', $second)[1]);

    $itemsIntersect = count(array_intersect($first, $second));
    if($itemsIntersect === count($first) || $itemsIntersect === count($second)){
        $no++;
    }
}

echo $no;