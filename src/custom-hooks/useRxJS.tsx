// import { useEffect, useState } from 'react';
// import { Subscription } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

// const useRxJS = (observable$, initialValue) => {
//   const [state, setState] = useState(initialValue);
//   const subscription: Subscription = new Subscription();

//   useEffect(() => {
//     subscription.add(
//       observable$
//         .pipe(
//           takeUntil(() => subscription.unsubscribe())
//         )
//         .subscribe((data) => {
//           setState(data);
//         })
//     );

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [observable$, subscription]);

//   return state;
// };

// export default useRxJS;
