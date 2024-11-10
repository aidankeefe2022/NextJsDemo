import Counter from './counter';
import Counter2 from './counter2';
import Table from './table';
import Link from './link';

export default function Page() {
    return (
      <div>
          <h1>My name is Aidan</h1>
          <Counter num={1}/>
          <Counter num={2}/>
          <Link/>
          <Table/>
      </div>
  )
  }