let counting_bits n =
  let dp = Array.make (n + 1) 0 in
  let offset = ref 1 in
  for i = 1 to n do
    if !offset * 2 = i then offset := !offset * 2;
    dp.(i) <- dp.(i - !offset) + 1
  done;

  dp
;;

let%test "case 1" = counting_bits 2 = [| 0; 1; 1 |]
let%test "case 2" = counting_bits 5 = [| 0; 1; 1; 2; 1; 2 |]
