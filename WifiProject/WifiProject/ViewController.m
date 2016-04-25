//
//  ViewController.m
//  WifiProject
//
//  Created by Tangguo on 16/4/25.
//  Copyright © 2016年 何月. All rights reserved.
//

#import "ViewController.h"
#import <NetworkExtension/NetworkExtension.h>

#define IOS_VERSION_9_OR_ABOVE (([[[UIDevice currentDevice] systemVersion] floatValue] >= 9.0)? (YES):(NO))

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    //ios 9 自动设置密码还需要一个文件，这个文件需要发申请邮件给苹果
    //https://forums.developer.apple.com/thread/9015
    //邮件地址是 networkextension@apple.com
    
    //You need to email networkextension@apple.com and ask for that entitlement.  They should get back to you with a questionnaire, and it goes from there.
    
    //ios9 不需要下载任何文件就可以连接wifi 可谓ios9的大突破
    //居然可以直接在系统wifi列表能显示自己设置的东西，这也表明苹果也慢慢的在开放自己的一些系统接口了
    if IOS_VERSION_9_OR_ABOVE {
        
        NSMutableDictionary* options = [[NSMutableDictionary alloc] init];
        //wifi列表显示的第二个标题（如果不清楚可以下载wifi万能要是看看，不过这个只限于ios9）
        [options setObject:@"何月的万能钥匙" forKey:kNEHotspotHelperOptionDisplayName];
        dispatch_queue_t queue = dispatch_queue_create("cc.tg.2131", 0);
        BOOL returnType = [NEHotspotHelper registerWithOptions:options queue:queue handler: ^(NEHotspotHelperCommand * cmd) {
            if (cmd.commandType == kNEHotspotHelperCommandTypeEvaluate || cmd.commandType == kNEHotspotHelperCommandTypeFilterScanList ) {
                for (NEHotspotNetwork* network  in cmd.networkList) {
                    if ([network.SSID isEqualToString:@"TG_JJChat"]) {  //wifi的ssid
                        [network setConfidence:kNEHotspotHelperConfidenceHigh];
                        [network setPassword:@"我是密码"];  //wifi的密码
                        
                        // This is required
                        NEHotspotHelperResponse *response = [cmd createResponse:kNEHotspotHelperResultSuccess];
                        [response setNetworkList:@[ network ]];
                        [response deliver];
                        
                        //经过这里之后去系统列表看就能看得到你配置的wifi了，从此就可以不用再输入密码啦。
                        
                        NSLog(@"Confidance set to high for ssid:%@",network.SSID);
                    }
                }
            }
        }];
        
        NSLog(@"returnType=%d",returnType);
        
    }else {
        
        //如果是ios8 以下则需要下载配置文件的方式去连接密码了
        //项目中我刚好用node js写了一个配置wifi配置文件的服务端代码，请看create_wifi_config.js
        
        
        NSString *url = @"http://7ktq5f.com2.z0.glb.clouddn.com/wifi_test_1.mobileconfig";
        
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];
        
    }
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
