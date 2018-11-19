package org.ramer.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author RAMER @Date 19/11/2018
 * @see
 */

/**
 * 微信开发者工具不能访问本地文件,所以使用springboot启动.
 */
@SpringBootApplication
public class AppController {
  public static void main(String args[]) {
    SpringApplication.run(AppController.class);
  }
}
