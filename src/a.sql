select * from tb as tb1
where a like 
( select concat('%',b,'%') from tb as tb2 ) as tb3



select * from tb as tb1
where tb1.b  

















delimiter $
create PROCEDURE selectSql()
BEGIN
    DECLARE  id int;   -- id
    -- 遍历数据结束标志
    DECLARE done INT DEFAULT FALSE;
    -- 游标
    DECLARE tb_bs CURSOR FOR 
      select b from tb;
    -- 将结束标志绑定到游标
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    -- 打开游标
    OPEN  cur_account;     
    -- 遍历
    read_loop: LOOP
            -- 取值 取多个字段
            FETCH  NEXT from cur_account INTO phone1,password1,name1;
            IF done THEN
                LEAVE read_loop;
             END IF;
 
        -- 你自己想做的操作
        insert into account(id,phone,password,name) value(UUID(),phone1,password1,CONCAT(name1,'的家长'));
    END LOOP;
 
 
    CLOSE cur_account;
END $




select *,
  if( a in (select ) 
    1,
    0
  ) as is_in
from tb 



select * from tb 
where tb.a like  concat( '%',tb.b,'%')